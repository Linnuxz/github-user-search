export type TTheme = {
    isLightTheme: boolean;
    setIsLightTheme?: (value: boolean) => void;
};

export type GithubUserData = Record<string, string | number | null>;

export type TComponent = {
    isLightTheme: boolean;
    data: GithubUserData;
};
