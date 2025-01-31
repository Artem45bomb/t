import { TextStyle } from "../styles";
import { ITypographyApi } from "../styles";


export const typographyBase:ITypographyApi = {
	displayLarge: new TextStyle(),
	displayMedium: new TextStyle(),
	displaySmall: new TextStyle(),
	headlineLarge: new TextStyle(),
	headlineMedium: new TextStyle(),
	headlineSmall: new TextStyle(),
	titleLarge: new TextStyle(),
	titleMedium: new TextStyle(),
	titleSmall: new TextStyle(),
	bodyLarge: new TextStyle(),
	bodyMedium: new TextStyle(),
	bodySmall: new TextStyle(),
	labelLarge: new TextStyle(),
	labelMedium: new TextStyle(),
	labelSmall: new TextStyle(),
}

export type TypographyKey = keyof ITypographyApi