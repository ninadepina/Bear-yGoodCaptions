```json
{
	"vtt": "00:00:00.000 --> 00:00:01.680",
	"speaker": ["Carmy"],
	"text": [
        "Ebra! Make sandwiches!"
    ],
	"situation": "in the background",
	"classes": ["shout", "visual_right"]
}
```

**"vtt":** timestamp range in the format of "start time --> end time" (in hours, minutes, seconds, and milliseconds).

**"speaker":** speaker or speakers associated with the text content. There may be multiple speakers associated with a given text content, the first speaker in the speakerarray will be linked with the first speaker in the text array and so on. If there is only one speaker but multiple text elements, the speaker will be added to the first text element. The speaker is formatted as the speaker but uppercased.

**"text":** text content of the subtitle. If there are multiple text elements, they will be shown under eachother. `*` around a word will result in an uppercased word. `_` around a word will result in an italic word. `[]` around a word will result in an uppercased word with `[]` around it.

**"situation":** represent the context or situation in which the text content is occurring. Will be shown above the text and is formatted as the situation but uppercased and with `()` around it.

**"classes":** classes that will be added to the subtitle(s). View the css file to find their meaning.

> p.s. when wanting to leave a property empty, use `null`.