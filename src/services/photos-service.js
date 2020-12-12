import ironManArt from '../assets/img/iron-man-art.jpg';
import batmanArt from '../assets/img/batman-art.jpg';
import superman1 from '../assets/img/superman-art.jpg';
import superman2 from '../assets/img/superman2-art.jpg';


const photos = [
    {
        id: "photo1",
        url: ironManArt,
        description: "Iron Man drawn by our subscriber.",
    },
    {
        id: "photo2",
        url: batmanArt,
        description: "Batman from our subscriber.",
    },
    {
        id: "photo3",
        url: superman1,
        description: "Another drawing from our subscriber. Now it is superman."
    },
    {
        id: "photo4",
        url: superman2,
        description: "Awesome drawing that one of you send."
    }
]

function getPhotos(itemId) {
    return photos.filter((item) => {
        return itemId === item.id;
    })
}

function getAllPhotos() {
    return photos;
}


export {getPhotos, getAllPhotos};