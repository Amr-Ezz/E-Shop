// src/shared/CategoryMenu.tsx
import { Menu } from "antd";
import styled from "styled-components";

const ThemedMenu = styled(Menu)`
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 12px;
  border: none;

  .ant-menu-item {
    color: ${(props) => props.theme.colors.text} !important;
  }

  .ant-menu-item-selected {
    background: ${(props) => props.theme.colors.tertiary} !important;
    color: ${(props) => props.theme.colors.text} !important;
  }

  
  &.ant-menu-horizontal > .ant-menu-item::after {
    border-bottom: none !important; 
  }

  &.ant-menu-horizontal {
    border-bottom: none; 
  }
`;


interface CategoryMenuProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
    mode?: "horizontal" | "vertical" | "inline"; 
    style?: React.CSSProperties;
}

const CategoryMenu = ({
  categories,
  selectedCategory,
  onSelectCategory,
    mode = "inline", 
}: CategoryMenuProps) => {
  return (
    <ThemedMenu
      mode={mode}
      selectedKeys={[selectedCategory]}
      onClick={(e) => onSelectCategory(e.key)}
      items={categories.map((cat) => ({
        key: cat,
        label: cat.charAt(0).toUpperCase() + cat.slice(1),
      }))}
    />
  );
};

export default CategoryMenu;
