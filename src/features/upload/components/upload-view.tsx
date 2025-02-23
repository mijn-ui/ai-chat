import { ACCEPTED_FILE_TYPES } from "@/constants/file-types";
import { FileUploader } from "@/components/file-uploader";

const UploadView = () => {
	return (
		<>
			<div className="flex min-h-[calc(100vh-128px)] items-center justify-center px-4 py-6">
				<div className="w-full max-w-screen-lg">
					<FileUploader accept={ACCEPTED_FILE_TYPES} maxFiles={8} />
				</div>
			</div>
		</>
	);
};

export default UploadView;
