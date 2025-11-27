type FileUploadProps = {
  suffix: string;
  files: FileList | undefined;
  buttonClass: string;
  handleImgFile: (event: Event) => void;
  children: any;
};