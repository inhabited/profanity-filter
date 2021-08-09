import lyricsgenius
import spotipy

genius = lyricsgenius.Genius(process.env.GENIUS_API_KEY)

title = input("Please enter a title:\n")
artist = input("Please enter a artist:\n")
substring = input("Please enter a blacklisted phrase:\n")

song = genius.search_song(title, artist)
print(song.lyrics[:-27])

fullstring = song.lyrics

if substring in fullstring:
    print("Blacklisted phrase detected - " + substring)
else:
    print("Not found!")