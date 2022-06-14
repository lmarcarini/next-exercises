import { Nav, LinkList, LinkListItem } from "@/components/index";
import Link from "next/link";

type Props = {};

const TopMenu = (props: Props) => {
  return (
    <Nav>
      <LinkList>
        {new Array(9).fill(0).map((_, i) => (
          <li key={i}>
            <Link href={`/exercises/${i + 1}`}>
              <LinkListItem>Exercise {i + 1}</LinkListItem>
            </Link>
          </li>
        ))}
      </LinkList>
    </Nav>
  );
};

export default TopMenu;
