export const pathHome = (): string => {
  return `/`;
};

export const pathMenu = (): string => {
  return `/menu`
};

export const pathLobby = (): string => {
  return `/lobby`
};

export const pathLogin = (): string => {
  return `/login`;
};

export const pathRegister = (): string => {
  return `/register`;
};

export const pathError = (): string => {
  return `/error`;
};

export const pathLeaderboard = (): string => {
  return `/leaderboard`;
};

export const pathTerminals = (): string => {
  return `/terminals`;
};

export const pathTerminal = (id: string): string => {
  return `/terminals/${id}`;
};


export const pathCredits = (): string => {
  return `/credits`;
};

export const pathActivationSent = (): string => {
  return `/activation-sent`;
};

export const pathActivation = (): string => {
  return `/user/confirm`;
};
