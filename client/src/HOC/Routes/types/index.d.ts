export interface RouteProps{
  exact?: boolean,
  path: string,
  component: React.ComponentClass<any, any> | React.FunctionComponent<any> | React.ComponentClass | React.FunctionComponent
}

type  Me = {
  id: string,
  username: string
};

type MeData = {
  me: Me | null
};
