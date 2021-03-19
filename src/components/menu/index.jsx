import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function Item({ item, inDropdown = false }) {
  const ItemLink = inDropdown ? NavDropdown.Item : Nav.Link;
  const handleNavigation = () => {
    console.log('Unimplemented navigation to:', item.link.href);
  };
  return (
    <ItemLink title={item.description} onClick={handleNavigation}>
      {item.title}
    </ItemLink>
  );
}

function Dropdown({ title, items }) {
  // React Bootstrap does not support parent items that are links, only text.
  // Therefore, the parent item it only used for its title.
  return (
    <NavDropdown title={title}>
      {items.map((item, key) => {
        // If the item is not a link, render it as text.
        if (!item.link.href.length) {
          return (
            <NavDropdown.ItemText key={key}>{item.title}</NavDropdown.ItemText>
          );
        }
        return <Item key={key} item={item} inDropdown />;
      })}
    </NavDropdown>
  );
}

function LinkItems({ items }) {
  return items.map((item, key) => {
    // React Bootstrap does not support parent items that are links, only text.
    // Therefore, we only render children in a dropdown if the item is
    // text-only. If it isn't, this condition won't pass and the item will be
    // rendered a link and its children will be ignored.
    if (!item.link.href.length) {
      if (!!item.children.length) {
        return <Dropdown key={key} title={item.title} items={item.children} />;
      }
      return <Navbar.Text key={key}>{item.title}</Navbar.Text>;
    }

    return <Item key={key} item={item} />;
  });
}

export default function Menu({ tree }) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Navbar.Text>Hackathon Menu Component</Navbar.Text>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <LinkItems items={tree} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
