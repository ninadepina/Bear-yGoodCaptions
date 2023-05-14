# 'CaptionWizard' - Documentation

> Designing with and for real people

For [this course](https://github.com/cmda-minor-web/human-centered-design-2223), you will receive a design assignment that you will create for one person. A real person. You must test your design every week. By testing and iterating, you will improve your design. Ultimately, you will have a design that is exclusively made for one individual. An exclusive design... So, who is this person for whom you are creating this? What does this person like or dislike? How does this person use a computer?

**Learning Objectives**

-   _Learn how to apply (design) principles in a design._
-   _Understand and incorporate user needs into your design._
-   _Learn how to test and use the results to improve your design._

## My assigned person

Marie is a 34-year-old Deaf (with a capital 'D', which means she doesn't see her deafness as a disability) UX designer. She was born deaf, and her native language is Dutch Sign Language. She works at UpInk, a design agency in Amsterdam that focuses on projects with social impact. Marie enjoys cooking, spending time with friends, kitesurfing, and teaching kitesurfing to other Deaf individuals.

Due to her deafness, Marie relies on sign language and lip-reading for communication. You'll understand that Marie therefore experiences difficulty with tasks that heavily rely on sound.

Marie experiences a significant loss of nuance while watching a movie or a documentary. Although many films offer closed captions, they are often too neutral.

Unlike typical prototypes, Marie is already proficient in using digital technologies. The challenge lies in incorporating visual representations or symbols for sound descriptions to convey the atmosphere or tone of a scene. Marie believes that excessive sound descriptions in captions are unnecessary when the sounds are already visible on screen, such as an explosion. She desires the inclusion of appropriately labeled speakers within the captions to enhance her understanding of conversations. Consistency and accuracy in representing speech and expressions are also valued by Marie in closed captions.

How might we enhance closed captions(cc) to provide Marie with a more meaningful viewing experience?

## Assumptions

-   Difficulty experiencing the emotions conveyed by a film/series (as music is a significant component in that).
-   Difficulty discerning who is saying what when multiple people are speaking.
-   Difficulty discerning the tone of the speaker (especially when the speaker is not on screen).

## First meeting with Marie

I met Marie at the end of the first week of the course. She was very open about her deafness and her life with it. Additionally, she expressed her thoughts on closed captions, conveying that she often perceives them to be too bland and devoid of emotion. She was very specific in her likes and dislikes, and I was able to take notes on her preferences. She wished to see more depth in captions, including the name of the speaker, their tone and an indication on where the background noise is coming from. But note that excessive captions is also a thing. For example, when a person is speaking and visible on screen, it is unnecessary to display their name.

Read the full transcript from meeting Marie [here](https://github.com/ninadepina/CaptionWizard/blob/main/docs/interview.md).

## Concept

I noticed that I was getting a bit stuck when trying to come up with a concept. This was mainly because I wanted to create something that Marie could actually use after this project, which is not entirely feasible.

In the end, I chose to work with a scene from the series 'The Bear', mainly because Marie expressed that that is one of the series she likes to watch. It's also one of the series she had difficulty following the closed captions and understanding the mood. The idea is to:

-   Add a visible indication of where background noises are coming from.
-   Improve closed captions.
    -   Add names when the speaker is not visible on screen.
    -   Provide more specific explanations of background noises.
    -   Add speech tone (stuttering, etc.).

## Second meeting with Marie (testing the concept)

Based on the first meeting with Marie, I made changes to the 'Bear' scene. Things I changed:

**Added light cues, which indicate where speech in the background is coming from**
![visualisation of position of background noise](https://github.com/ninadepina/CaptionWizard/assets/89778503/a9b67c7d-0309-4b37-ae1d-d64447ff2d19)

**Added names when the speaker is not visible on screen**
| Old | New |
| :-- | :-- |
| ![current captions](https://github.com/ninadepina/CaptionWizard/assets/89778503/05732a8b-1551-4602-a99f-88a8e26d5f6b) | ![captions with improved names](https://github.com/ninadepina/CaptionWizard/assets/89778503/d719f09d-97d4-4c55-bbb9-1a9420bcbdce) |

**Added speech tone (stuttering, etc.)**
| Old | New |
| :-- | :-- |
| ![current captions](https://github.com/ninadepina/CaptionWizard/assets/89778503/dd331351-fc74-41d9-a706-7641c43263ac) | ![captions with improved speech](https://github.com/ninadepina/CaptionWizard/assets/89778503/181ee149-cdbc-42d4-bce0-0d95c913c7fb) |

She gave me some great feedback, which I will use to improve my concept:

```plaintext
Nice, good.

In the beginning, I think you had Carmy who was constantly talking, in that case it would be unnecessary to show his name all the time.

It could also be fun to play with the placement of the closed captions during the part where two people bump into each other.

It's great how you approached the subtitling, such as transcribing speech like 'Wha--' instead of 'What'. This is really helpful because I can clearly see how quickly people talk to each other. Sometimes, it's difficult for me to see who is speaking. But it's nice that there is still a name there. It might also be fun to play with placement during the scene with Marcus and Sydney. With proper placement, it would be unnecessary to display the characters' names as well.

I wonder how people in the clip actually speak. As the clip progresses, it becomes harder to see the tone.

Text in all caps can sometimes be too much, but sometimes it's necessary. There are different levels of tone, which I find interesting. How can you represent this, for example with font weights or etc. You should experiment with this.

Nice!!! Well done.
```

**Things I'll improve based on Marie's feedback:**

-   Remove speaker names when the speaker keeps talking.
-   Play with placement of closed captions.
-   Look into more ways to display how loud someone is speaking.

## Improvements I made since testing the concept

I removed the speaker names when the speaker keeps talking.
![v2Names](https://github.com/ninadepina/CaptionWizard/assets/89778503/a6c6ae10-bdf7-4b02-a063-7ea3e22c128d)

I played with the placement of the closed captions.
![v2Positioning](https://github.com/ninadepina/CaptionWizard/assets/89778503/0540c984-3006-466a-88e0-6056421b3e98)

I added a visual indication (subtle shake of the screen) when someone is aggressively screaming.
![gif](https://github.com/ninadepina/CaptionWizard/assets/89778503/6e6075fd-c169-4ddc-b5d9-15badf9b0ddc)

## Final concept

My solution for Marie is a web app that has enhanced closed captions. It includes the following features:

-   **Speaker identification:** when a speaker is not visible on the screen, the name of the speaker is added to the caption. This feature helps users easily associate the spoken words with specific individuals, even when they are not in the camera's view.
![captions with improved names](https://github.com/ninadepina/CaptionWizard/assets/89778503/d719f09d-97d4-4c55-bbb9-1a9420bcbdce)

-   **Detailed explanations of background noises:** specific and contextual explanations of background noises to assist users in understanding their origin or significance. Also added written out sounds (e.g. [SMASH], [CLATTER]) to add more depth to the viewing experience.
![detailed explanations of background noises](https://github.com/ninadepina/CaptionWizard/assets/89778503/5e88d04c-c030-4fe8-b857-31ea7727c149)

-   **Speech tone:** in spoken language, the tone of voice adds meaning to the words (e.g. a sarcastic tone or a stutter). Similarly, the volume of the voice can convey a different meaning (in spoken language you have a big range in volume, in closed captions you only have lower- and uppercase letters). This feature adds the tone of voice to the closed captions and adds a subtle shake to the screen when someone is furious to provide more depth to the viewing experience.
![captions with improved speech](https://github.com/ninadepina/CaptionWizard/assets/89778503/181ee149-cdbc-42d4-bce0-0d95c913c7fb)
![gif shaking screen](https://github.com/ninadepina/CaptionWizard/assets/89778503/6e6075fd-c169-4ddc-b5d9-15badf9b0ddc)

-   **Visual indication of background noises:** provides a visual indication that helps users identify the direction of the source of background noises. This provides a more immersive viewing experience and prevents users from being surprised by not hearing the sound.
![visual indication of background noises](https://github.com/ninadepina/CaptionWizard/assets/89778503/0b4022a6-a057-4f48-a5ac-0689949a185a)

**Live prototype: **[captionwizard.vercel.app/](https://captionwizard.vercel.app/)

## Exclusive Design Principles and how I applied them

Exclusive Design is the opposite of Inclusive Design. Normally we design sites and apps that can be used by as many people as possible (Inclusive Design). With Exclusive Design you focus entirely on 1 person, you tailor your design completely to that person[^1].

### 1. Study Situation

> By looking very specifically at the situation of one person, you'll truly understand what that person needs.

Marie was born deaf. She has never had the ability to perceive sounds, rendering her unaware of the transformative power of music and how it can profoundly influence one's mood.

Marie likes to watch series, but is currently not satisfied with the closed captions streaming services provide. She finds them to be too bland and devoid of emotion. She wishes to see more depth in captions, including the name of the speaker, their tone and an indication on where the background noise is coming from. But note that excessive captions is also a thing.

These wishes are specific to Marie and don't necessarily apply to other people who have problems with closed captions.

### 2. Ignore Conventions

> Patterns on the web are useful for quickly understanding an interface, but people with disabilities may struggle with such a pattern.

The standard positioning for closed captions is at the bottom (and center) of the video, which has become a widely recognized pattern. However, Marie has expressed that she would like the closed captions to be more clear (as in who is speaking). This means that I will have to experiment with the positioning of the captions, as well as with the content of the closed captions.

### 3. Prioritise Identity

> Design is tailored specifically to meet the user's preferences.

I chose to work with a scene from 'The Bear' because Marie expressed in our first meeting that that is one of the series she likes to watch. It's also one of the series she had difficulty following the closed captions and understanding the mood.

### 4. Add Nonsense

> A website needs to be functional. However, once it works, it can quickly become boring if you don't add anything fun. Why not let your visitors roam around your application with a smile on their face?

In the scene I used, there is a part where two people bump into each other and kitchenware falls and clatters on the ground. I played around with positioning and animation of onomatopoeia words (e.g. BANG, KRRGG, etc.), which I think is a fun addition to the scene.

[^1]: Van Gemert, V. (n.d.). Flipping things. [https://exclusive-design.vasilis.nl/flipping-things/](https://exclusive-design.vasilis.nl/flipping-things/)
