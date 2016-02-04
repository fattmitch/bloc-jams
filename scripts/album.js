var albumPicasso = {
    name: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { name: 'Blue', length: '4:26' },
        { name: 'Green', length: '3:14' },
        { name: 'Red', length: '5:01' },
        { name: 'Pink', length: '3:21' },
        { name: 'Magenta', length: '2:15' }
    ]
};

var albumMarconi = {
    name: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { name: 'Hello, Operator?', length: '1:01' },
        { name: 'Ring, ring, ring', length: '5:01' },
        { name: 'Fits in your pocket', length: '3:21'},
        { name: 'Can you hear me now?', length: '3:14' },
        { name: 'Wrong phone number', length: '2:15'}
    ]
};

var albumCoconutWillie = {
    name: 'Coconut Willie is Here',
    artist: 'Coconut Willie',
    label: 'Willie\'s Jams',
    year: '2016',
    albumArtUrl: 'assets/images/album_covers/willie.jpg',
    songs: [
        { name: 'Willie\'s here', length: '2:02'},
        { name: 'Surf or Die', length: '2:32'},
        { name: 'Yewwwwwwwww', length: '3:30'},
        { name: 'The Wave of Life', length: '4:10'},
        { name: 'Into the Sunset', length: '6:21'},
        { name: 'Hey Now, That\'s not nice', length: '1:46'},
        { name: 'Negative Ions, Positive Vibes', length: '4:20'},
        { name: 'The Sea Becons', length: '3:45'},
        { name: 'Chipshot', length: '3:18'},
        { name: 'Toobin\' Tiyam', length: '2:02'},
    ]
};

var createSongRow = function (songNumber, songName, songLength) {
    var template = 
        '<tr class="album-view-song-item">'
     +  '   <td class="song-item-number">' + songNumber + '</td>'
     +  '   <td class="song-item-title">' + songName + '</td>'
     +  '   <td class="song-item-durration">' + songLength + '</td>'
     +  '</tr>'
     ;
    
    return template;
};

var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

var setCurrentAlbum = function (album) {
    
    albumTitle.firstChild.nodeValue = album.name;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);
    
    albumSongList.innerHTML = '';
    
    for (i=0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
    }
};

window.onload = function() {
    setCurrentAlbum(albumPicasso);

    var albums = [albumPicasso, albumMarconi, albumCoconutWillie];
    var index = 1;
    albumImage.addEventListener("click", function(event) {
        setCurrentAlbum(albums[index]);
        index++;
        if (index == albums.length) {
            index = 1;
        }
    });
};