export const UploadImage = async (img) => {
  const cloudUrl = "https://api.cloudinary.com/v1_1/cacigaoff/upload";
  const formData = new FormData();
  formData.append("upload_preset", "CarlinGebyte");
  formData.append("file", img);

  const response = await fetch(cloudUrl, {
    method: "POST",
    body: formData,
  });
  const cloudResponse = await response.json();

  return cloudResponse.secure_url;
};
