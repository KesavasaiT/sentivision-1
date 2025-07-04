# sentivision

Submission for the **2023 UVA HooHacks Hackathon**

Estimates verbal sincerity by combining computer vision and natural language processing.

[Link to Devpost submission](https://devpost.com/software/sentivision)

[Link to demo video](https://www.youtube.com/watch?v=0Fc7r9HUZGE)

## Description
sentivision is an application that allows a user to upload a video of a person speaking. The app then uses computer vision and a pretrained face recognition/analysis model released by Meta to predict the emotions of the person's face. Additionally, their spoken words are transcribed by a voice recognition model, and that text is then processed with a natural language processing model to estimate the emotions in the text. The two structures representing emotions are then compared, and if the disparity is large enough, then the UI display classifies the person as being ingenuine.

## Inspiration

After having watched a mildly unhealthy amount of true crime interrogations on YouTube, it became clear to some of our team members that technology is often used by law enforcement to enhance their criminal investigations. For instance, the polygraph test uses features of multiple bodily actions to detect if a suspect is lying. However, these technologies are often inaccurate, with polygraphs in fact being known for giving wrong results. So, we were curious about how machine learning could be used in this effort.

## Technologies Used

The app was developed as a component-based platform using ReactJS, where the different aspects of the website were developed to facilitate a simple user experience. The file uploading functionality was done using Flask. We started with drawing the UI on paper to plan out how users would interact with it, and used the different skillsets of the team members to our advantage when distributing work. On the backend, the video was parsed and analyzed using OpenCV and FaceBook's DeepFace, and the audio's transcription was analyzed using the Natural Language Toolkit.

**A analytics portal will utilize AWS services **

## Next Steps

The end goal of this software would be to enhance law enforcement's capabilities by providing a baseline way of determining how genuine a suspect is being in a particular case when investigators are unsure. We could also work on developing more visuals, such as producing a graph based on the .csv output to show how much the suspect's physical demeanor varies with their words' semantics over the course of an interrogation.

