import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Savana Hamood </span>
        from <span className={s.purple}> Amman, Jordan.</span>
        <br />
        <br />

        A Full Stack Web Developer <br />
        with expertise in cross-platform development{' '}
        using NodeJS & ReactJS.
        <br />
        {/* <br /> */}
        I have a Bachelor's degree in Telecommunication and Softwear Engineering
        <br />
        {/* Master's degree in Project Management from Ternopil Academy. */}
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Playing Games
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
