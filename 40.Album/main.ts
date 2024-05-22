function myAlbum(artistName: string, albumTitle: string){
    return{artistName,albumTitle}
}

let album1 = myAlbum("Ali", "Rang-e-Mohabbat");
let album2 = myAlbum("Madad", "Roshan Andhera");
let album3 = myAlbum("Ayaz","Masum-e-dil");

console.log(album1);
console.log(album2);
console.log(album3);



function myAlbum2(artistName: string, albumTitle: string, numberOfTracks?: string,){
    return{artistName,albumTitle,numberOfTracks}
}

let album4 = myAlbum2("Ali", "dil hai", 30);
let album5 = myAlbum2("Madad", "ajeeb kahani", 65);
let album6 = myAlbum2("Ayaz","dastane ishq", 44);

console.log(album4);
console.log(album5);
console.log(album6);