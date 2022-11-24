import { Ul, Li} from "./styles/NavBar.module";


interface urlNavBarProps {
  linkName: string;
  href: string;
}

export default function UrlnavBar(props: urlNavBarProps) {
  return (
    <>
      <Ul>
        <Li >
          <span>
          <a href={props.href}>{props.linkName}</a>
          </span>
        </Li>
      </Ul>
    </>
  );
}
