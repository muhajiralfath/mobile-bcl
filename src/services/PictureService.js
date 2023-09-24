import {useDep} from "../context/DependencyContext";

const PictureService = () => {
    const {apiClient} = useDep()

    const uploadProfilePicture = async (formData) => {
        console.log("INI UPLOAD PROFILE PICTURE", typeof formData)
        console.log("ini formData", formData)
        try {
            const response = await apiClient({
                url: "/api/users/profile-picture",
                method: "put",
                body: formData
            })

            console.log("Response Data", response)
            return response
        } catch (err){
            console.log("Axios Error", err)
            throw err
        }
    }

    const deleteProfilePicture = async (imageId) => {
        try {
            return await apiClient({
                url: `/api/users/profile-picture/${imageId}`,
                method: "delete"
            })
        } catch (err){

        }
    }

    return {
        uploadProfilePicture, deleteProfilePicture
    }
}

export default PictureService