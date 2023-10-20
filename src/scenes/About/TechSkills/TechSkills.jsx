import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiNodejsSmall,
  DiSass,
  DiBootstrap ,
} from 'react-icons/di';
import {
  SiTypescript,
  SiRedux,
  SiSocketdotio,
  SiAmazonaws,
  SiPostgresql,
  SiMysql,
  SiJest,
  SiNetlify,
  SiRender,
  SiNextdotjs,
} from 'react-icons/si';
import {RiReactjsFill} from 'react-icons/ri'
import {AiFillHtml5,
  AiFillGithub,
} from 'react-icons/ai'
import {FaAws,
  FaGithub,
} from 'react-icons/fa'

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
     
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <SiPostgresql />
      </li>
      <li className={s.techIcon}>
        <DiSass />
      </li>
      <li className={s.techIcon}>
        <FaAws />
      </li>
      <li className={s.techIcon}>
        <AiFillHtml5 />
      </li>
      <li className={s.techIcon}>
        <SiSocketdotio />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <SiMysql />
      </li>
      <li className={s.techIcon}>
        <SiJest />
      </li>
      <li className={s.techIcon}>
        <AiFillGithub />
      </li>
      <li className={s.techIcon}>
        <DiBootstrap  />
      </li>
       <li className={s.techIcon}>
        <SiNextdotjs />
      </li>
    </ul>
  );
};

export default TechSkills;
