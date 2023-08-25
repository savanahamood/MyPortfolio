import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';

const Footer = () => {
  // let date = new Date();
  // let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h1>© 2023 Copyright</h1>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/savanahamood"
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            {/* <li>
              <a
                href="https://www.facebook.com/Snaychuk"
                target="_blank"
                rel="noreferrer"
                aria-label="facebook"
              >
                <FaFacebookSquare />
              </a>
            </li> */}
            {/* <li>
              <a
                href="https://t.me/snaichuk_v"
                target="_blank"
                rel="noreferrer"
                aria-label="TelegramPlane"
              >
                <FaTelegramPlane />
              </a>
            </li> */}
            <li>
              <a
                href="https://www.linkedin.com/in/savana-hamood/"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
