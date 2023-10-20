import s from './IntroSection.module.scss';
import avatar from '../../../assets/savana.png';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
            I'm a Full-Stack JavaScript Developer<br />
              
            </p>

            <p>
              My skills include proficiency in{' '}
              <i>
                <b className={s.purple}>
                JavaScript, ReactJS, NodeJs,
                </b>
              </i>
              <br />
              and other relevant technologies. <br />
               {/* I love to create beautiful and functional websites.<br />
              looking for a place where i can learn and achieve.  */}
            </p>

            <p>
              My field of Interest's are building new
              <i>
                <b className={s.purple}> Beautiful & Functional Websites.</b>
              </i>
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={false} tiltEnable={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} style={{
      width: '300px', // Set the desired width
      height: '300px', // Set the desired height
      borderRadius: '50%', // Make the image circular
    }}/>
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/savanahamood"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          {/* <li className={s.socialLink}>
            <a
              href="https://www.facebook.com/Snaychuk"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="facebook"
            >
              <FaFacebookSquare />
            </a>
          </li> */}
          {/* <li className={s.socialLink}>
            <a
              href="https://t.me/snaichuk_v"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="telegram"
            >
              <FaTelegramPlane />
            </a>
          </li> */}
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/savana-hamood/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
