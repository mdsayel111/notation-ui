
import Container from "../components/shared/container";
import Section from "../components/shared/section";
import SourceCode from "../components/shared/source-code";

export default function RootLayoutPage() {
  return (
    <Container
      title="Root Layout"
      description="A modern, customizable React UI component library built with Vite, TypeScript, and Tailwind CSS."
    >
      <Section
        title="Set up layout"
        description="Note: "
      >
        <SourceCode
          code={`import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { RootLayout, NotificationDropdownContents, ProfileDropdownContents, SearchDropdownContents } from 'notation-ui'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <RootLayout
          navItems={[
              {
                  category: "Apps",
              },
              {
                  name: 'Installation',
                  href: '/',
                  icon: MonitorStopIcon,
              },
              {
                  name: 'Authentication',
                  icon: LockKeyholeIcon,
                  children: [
                      {
                          name: 'Sign In',
                          href: '/signin',
                      },
                      {
                          name: 'Sign Up',
                          href: '/signup',
                      },
                      {
                          name: 'Reset Password',
                          href: '/reset-password',
                      },
                  ],
              },
          ]}
          logoSrc={"your_logo_path"}
          notificationsDropdownContents={
              <NotificationDropdownContents   // NotificationDropdownContents is a component defined in notation-ui, you can use your own component
                  notifications={NotificationItem[]}  // NotificationItem is a type defined in notation-ui
                  handleClearAll={() => { }}  // handleClearAll is a function called when the clear all button is clicked
                  handleViewAll={() => { }}  // handleViewAll is a function called when the view all button is clicked
              />
          }
          profileDropdownContents={
              <ProfileDropdownContents // ProfileDropdownContents is a component defined in notation-ui, you can use your own component
                  username='Notation'  // username is a string
                  menuItems={MenuItems[]}  // MenuItems is a type defined in notation-ui
                  logoutItem={MenuItems[]}  // MenuItems is a type defined in notation-ui
              />
          }
          searchDropdownContents={
            <SearchDropdownContents // SearchDropdownContents is a component defined in notation-ui, you can use your own component
                items={SearchItem[]}  // SearchItem is a type defined in notation-ui
            />
          }
          handleSearch={  // handleSearch is a function called when the search button is clicked
            (value) => { 
                console.log(value);
            }
          }
      >
        <Outlet />
      </RootLayout>
    ),
    children: [
      {
        index: true,
        element: <h1>home</h1>,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
`
          } />
      </Section>
    </Container >
  );
}