import axios from 'axios';

export const uploadToCloudinary = async (fileUri) => {
    try {
        const formData = new FormData();
        formData.append('file', {
            uri: fileUri,
            type: 'image/jpeg', // Adjust type based on your file
            name: 'upload.jpg', // Adjust name based on your requirement
        });
        formData.append('upload_preset', 'prescription_upload'); // Replace with your preset
        formData.append('cloud_name', 'dpqtdygz0'); // Replace with your cloud name

        const response = await axios.post(
            'https://api.cloudinary.com/v1_1/dpqtdygz0/image/upload',
            formData,
            { headers: { 'Content-Type': 'multipart/form-data' } }
        );

        return response.data; // Contains `secure_url` if successful
    } catch (error) {
        console.error('Error uploading file:', error.message || error.response.data);
        throw error; // Re-throw the error to handle it in the UI
    }
};
