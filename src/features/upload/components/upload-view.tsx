import { FileUploader } from "@/components/file-uploader";

const FileUpload = () => {
	return (
		<>
			<div className="mt-16 flex items-center justify-center">
				<div className="size-full max-w-screen-lg">
					<FileUploader maxFiles={8} />
				</div>
			</div>
		</>
	);
};

export default FileUpload;
