

export const About = () => {
  return (
    <>
    <section className="about" id="about">
   <br>
   </br>
      <div className="about-container">
        
        {/* LEFT CONTENT */}
        <div className="about-text">
          <h5 className="about-label">WHO AM I?</h5>

          <p>

I care deeply about persistence, diligence, and empathy. I hold myself to a high standard and constantly push to improve not just as an engineer, but as a person. I tend to become the go-to person in teams and classrooms: the one people rely on when something needs to get done, debugged, or figured out. That role takes time and effort, and while not everyone wants it, I take pride in showing up consistently and owning problems end to end.

   </p>

          <p>
          I’m someone who will go out of my way to help others solve hard problems, but I also believe strongly in accountability owning my work, my decisions, and my growth. I ask questions, learn quickly, and take responsibility once I understand the system.


          </p>

          
      <p>

I value thoughtful conversations, new perspectives, and environments that reward ownership over hype. If any of this resonates, feel free to reach out . I’m always open to a meaningful conversation.
       
    
      </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image-wrapper">
          <div className="about-image-placeholder">
          <img
    src='src/assets/img/aboutmeimg.jpg'
    alt="Sadhana Saravanan"
    className="about-image"
  />
          </div>

          <div className="about-vertical-tag">
            ABOUT ME
          </div>
        </div>

      </div>

    
       
     
    </section>
    </>
  );
};
