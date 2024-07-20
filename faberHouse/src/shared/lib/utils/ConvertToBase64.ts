export const convertToBase64 = (file: File, format: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (e: any) {
      const base64String = e.target.result.split(",")[1];
      resolve(`${format}${base64String}`);
    };

    reader.onerror = function (error) {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
};
