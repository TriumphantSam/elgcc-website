# ELGCC Teaching Upload Assistant

This is the staff-friendly workflow for adding teachings to the website.

## How Staff Use It

1. Double-click `Teaching Upload Assistant.bat`.
2. Enter the teaching year, series, and speaker.
3. Choose individual audio files or a folder of audio files.
4. Review the detected titles and edit anything that needs correction.
5. Click `Upload and Update Website`.

The assistant uploads the files to Archive.org using the Archive.org setup already on this computer, then adds the new teachings to `content/teachings/sermons.json`.

## Publishing

By default, the assistant stops after updating and validating the website data. It will show `Ready for owner publish`.

To allow the assistant to commit and push automatically later, set this environment variable on the church-owned publishing computer:

```powershell
setx TEACHING_UPLOADER_ALLOW_PUSH 1
```

The GitHub and Vercel ownership should be moved to a church-owned account or organization before enabling staff publishing.

## Optional Local Password

To require a password before uploading, set:

```powershell
setx TEACHING_UPLOADER_PASSWORD "choose-a-private-password"
```

Close and reopen the assistant after changing environment variables.

## What Gets Uploaded

The assistant accepts `.mp3` and `.m4a` files. It creates clean Archive.org filenames from the teaching titles so future links do not include local computer paths.

Default Archive.org metadata:

- `mediatype: audio`
- `collection: opensource_audio`
- `creator: Eternal Life Global Community Church`
- `description: Sermon recordings from ELGCC for the year {year}. Speaker: {speaker}`
