import React from 'react';
import Link from '../Link/Link';
import profilePhoto from '../../assets/images/profilephoto.png';

const AboutMe = () => {
  return (
    <section className="aboutMe">
      <section>
        <div class="skewed-about"></div>
      </section>
      <div className="aboutMe__imgContainer">
        <img src={profilePhoto} alt="Alba" className="aboutMe__img"></img>
      </div>
      <div className="aboutMe__textContainer">
        <h1>¡Hola! </h1>
        <p className="aboutMe__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          ornare elit. Fusce bibendum mi vel magna eleifend, quis commodo arcu
          tempus. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec id varius enim. Praesent sodales diam
          nibh, a consequat elit blandit eleifend. Etiam elementum ex id neque
          feugiat, eu elementum est mollis. Duis nisl quam, fermentum sit amet
          lobortis eu, pellentesque quis quam. Mauris felis augue, tincidunt
          egestas metus quis, pharetra ultrices erat. Etiam ornare mauris ut
          nibh interdum pretium id ut ipsum. Ut lectus elit, fringilla quis
          vestibulum at, maximus ut mi. Nulla non purus sit amet elit
          scelerisque dapibus eu in lacus. Nam condimentum ligula metus, non
          lobortis diam venenatis quis. Sed eget dui a augue pulvinar tempor.
          Praesent dignissim metus purus, eget convallis odio fringilla vitae.
          Donec purus turpis, ultricies eget nulla nec, hendrerit suscipit
          massa. Suspendisse et suscipit elit, quis ornare ex. Praesent congue
          erat ante.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
