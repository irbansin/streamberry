import { Header } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export const LoggedIn = {
  args: {
    title: "My Header",
    imgAddress: "https://via.placeholder.com/150",
    imgAltText: "Placeholder image",
    user: {
      name: "Jane Doe",
    },
    onLogin: () => alert("Login"),
    onLogout: () => alert("Logout"),
    onCreateAccount: () => alert("Create Account"),
    loginEnabled: true,
  },
};

export const LoggedOut = {
  args: {
    title: "My Header",
    imgAddress: "https://via.placeholder.com/150",
    imgAltText: "Placeholder image",
    onLogin: () => alert("Login"),
    onLogout: () => alert("Logout"),
    onCreateAccount: () => alert("Create Account"),
    loginEnabled: true,
  },
};
