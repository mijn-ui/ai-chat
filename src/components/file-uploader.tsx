"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@mijn-ui/react-button";
import { useControlledState } from "@mijn-ui/react-hooks";
import { Progress } from "@mijn-ui/react-progress";
import { ScrollArea } from "@mijn-ui/react-scroll-area";
import { cn } from "@mijn-ui/react-theme";
import { formatBytes } from "@/lib/utils";
import Dropzone, {
	type DropzoneProps,
	type FileRejection
} from "react-dropzone";
import { LuUpload, LuX } from "react-icons/lu";
import { toast } from "sonner";

type FileUploaderProps = React.HTMLAttributes<HTMLDivElement> & {
	/**
	 * Value of the uploader.
	 * @type File[]
	 * @default undefined
	 * @example value={files}
	 */
	value?: File[];

	/**
	 * Function to be called when the value changes.
	 * @type React.Dispatch<React.SetStateAction<File[]>>
	 * @default undefined
	 * @example onValueChange={(files) => setFiles(files)}
	 */
	onValueChange?: React.Dispatch<React.SetStateAction<File[]>>;

	/**
	 * Function to be called when files are uploaded.
	 * @type (files: File[]) => Promise<void>
	 * @default undefined
	 * @example onUpload={(files) => uploadFiles(files)}
	 */
	onUpload?: (files: File[]) => Promise<void>;

	/**
	 * Progress of the uploaded files.
	 * @type Record<string, number> | undefined
	 * @default undefined
	 * @example progresses={{ "file1.png": 50 }}
	 */
	progresses?: Record<string, number>;

	/**
	 * Accepted file types for the uploader.
	 * @type { [key: string]: string[]}
	 * @default
	 * ```ts
	 * { "image/*": [] }
	 * ```
	 * @example accept={["image/png", "image/jpeg"]}
	 */
	accept?: DropzoneProps["accept"];

	/**
	 * Maximum file size for the uploader.
	 * @type number | undefined
	 * @default 1024 * 1024 * 2 // 2MB
	 * @example maxSize={1024 * 1024 * 2} // 2MB
	 */
	maxSize?: DropzoneProps["maxSize"];

	/**
	 * Maximum number of files for the uploader.
	 * @type number | undefined
	 * @default 1
	 * @example maxFiles={5}
	 */
	maxFiles?: DropzoneProps["maxFiles"];

	/**
	 * Whether the uploader should accept multiple files.
	 * @type boolean
	 * @default false
	 * @example multiple
	 */
	multiple?: boolean;

	/**
	 * Whether the uploader is disabled.
	 * @type boolean
	 * @default false
	 * @example disabled
	 */
	disabled?: boolean;
};

const FileUploader = (props: FileUploaderProps) => {
	const {
		value: valueProp,
		onValueChange,
		onUpload,
		progresses,
		accept = { "image/*": [] },
		maxSize = 1024 * 1024 * 2,
		maxFiles = 1,
		multiple = false,
		disabled = false,
		className,
		...dropzoneProps
	} = props;

	const [files, setFiles] = useControlledState(valueProp, [], onValueChange);

	const onDrop = React.useCallback(
		(acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
			if (!multiple && maxFiles === 1 && acceptedFiles.length > 1) {
				toast.error("Cannot upload more than 1 file at a time");

				return;
			}

			if ((files?.length ?? 0) + acceptedFiles.length > maxFiles) {
				toast.error(`Cannot upload more than ${maxFiles} files`);

				return;
			}

			const newFiles = acceptedFiles.map((file) =>
				Object.assign(file, {
					preview: URL.createObjectURL(file)
				})
			);

			const updatedFiles = files ? [...files, ...newFiles] : newFiles;

			setFiles(updatedFiles);

			if (rejectedFiles.length > 0) {
				rejectedFiles.forEach(({ file }) => {
					toast.error(`File ${file.name} was rejected`);
				});
			}

			if (
				onUpload &&
				updatedFiles.length > 0 &&
				updatedFiles.length <= maxFiles
			) {
				const target =
					updatedFiles.length > 0 ? `${updatedFiles.length} files` : `file`;

				toast.promise(onUpload(updatedFiles), {
					loading: `Uploading ${target}...`,
					success: () => {
						setFiles([]);

						return `${target} uploaded`;
					},
					error: `Failed to upload ${target}`
				});
			}
		},

		[files, maxFiles, multiple, onUpload, setFiles]
	);

	function onRemove(index: number) {
		if (!files) return;
		const newFiles = files.filter((_, i) => i !== index);
		setFiles(newFiles);
		onValueChange?.(newFiles);
	}

	// Revoke preview url when component unmounts
	React.useEffect(() => {
		return () => {
			if (!files) return;
			files.forEach((file) => {
				if (isFileWithPreview(file)) {
					URL.revokeObjectURL(file.preview);
				}
			});
		};
	}, []);

	const isDisabled = disabled || (files?.length ?? 0) >= maxFiles;

	return (
		<div className="relative flex flex-col gap-6 overflow-hidden">
			<Dropzone
				onDrop={onDrop}
				accept={accept}
				maxSize={maxSize}
				maxFiles={maxFiles}
				multiple={maxFiles > 1 || multiple}
				disabled={isDisabled}
				noClick>
				{({ getRootProps, getInputProps, open, isDragActive }) => (
					<div className="flex w-full flex-col overflow-hidden rounded-2xl border bg-background">
						<div className="w-full p-6">
							<div
								{...getRootProps()}
								className={cn(
									"group relative grid h-52 w-full cursor-pointer place-items-center rounded-large border-2 border-dashed border-muted-foreground/25 bg-card px-5 py-2.5 text-center transition hover:bg-muted/25",
									"ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
									isDragActive && "border-muted-foreground/50",
									isDisabled && "pointer-events-none opacity-60",
									className
								)}
								{...dropzoneProps}>
								<input {...getInputProps()} />
								{isDragActive ? (
									<div className="flex flex-col items-center justify-center gap-4 sm:px-5">
										<div className="rounded-full border border-dashed p-3">
											<LuUpload
												className="size-7 text-muted-foreground"
												aria-hidden="true"
											/>
										</div>
										<p className="font-medium text-muted-foreground">
											Drop the files here
										</p>
									</div>
								) : (
									<div className="flex flex-col items-center justify-center gap-4 sm:px-5">
										<div className="rounded-full border border-dashed p-3">
											<LuUpload
												className="size-7 text-muted-foreground"
												aria-hidden="true"
											/>
										</div>
										<div className="space-y-px">
											<p className="font-medium text-muted-foreground">
												Drag files to upload.
											</p>
											<p className="text-sm text-muted-foreground/70">
												You can upload
												{maxFiles > 1
													? ` ${maxFiles === Infinity ? "multiple" : maxFiles}
                      files (up to ${formatBytes(maxSize)} each)`
													: ` a file with ${formatBytes(maxSize)}`}
											</p>
										</div>
									</div>
								)}
							</div>
						</div>

						<div className="flex w-full items-center border-t p-4">
							<Button
								onClick={open}
								size="sm"
								color="primary"
								className="w-full max-w-32">
								Upload <LuUpload />
							</Button>
						</div>
					</div>
				)}
			</Dropzone>
			<div className="flex h-fit w-full flex-col gap-4 rounded-2xl border bg-background p-4">
				<h3 className="mx-2 text-medium font-medium">Uploaded Files</h3>
				<ScrollArea className="rounded-large border bg-card p-2">
					<div className="flex size-full max-h-64 min-h-32 flex-col gap-4">
						{files?.length > 0 &&
							files?.map((file, index) => (
								<FileCard
									key={index}
									file={file}
									onRemove={() => onRemove(index)}
									progress={progresses?.[file.name]}
								/>
							))}
					</div>
				</ScrollArea>
			</div>
		</div>
	);
};

interface FileCardProps {
	file: File;
	onRemove: () => void;
	progress?: number;
}

function FileCard({ file, progress, onRemove }: FileCardProps) {
	return (
		<div className="relative flex items-center space-x-4">
			<div className="flex flex-1 space-x-4">
				{isFileWithPreview(file) ? (
					<Image
						src={file.preview}
						alt={file.name}
						width={48}
						height={48}
						loading="lazy"
						className="aspect-square shrink-0 object-cover"
					/>
				) : null}
				<div className="flex w-full flex-col gap-2">
					<div className="space-y-px">
						<p className="line-clamp-1 text-sm font-medium text-foreground/80">
							{file.name}
						</p>
						<p className="text-xs text-muted-foreground">
							{formatBytes(file.size)}
						</p>
					</div>
					{progress ? <Progress value={progress} /> : null}
				</div>
			</div>
			<div className="flex items-center gap-2">
				<Button
					type="button"
					variant="ghost"
					size="xs"
					iconOnly
					onClick={onRemove}
					className="text-muted-foreground">
					<LuX className="size-4" aria-hidden="true" />
					<span className="sr-only">Remove file</span>
				</Button>
			</div>
		</div>
	);
}

export { FileUploader };

function isFileWithPreview(file: File): file is File & { preview: string } {
	return "preview" in file && typeof file.preview === "string";
}
