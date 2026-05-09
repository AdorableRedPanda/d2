type Classname = boolean | null | string | undefined;
export const clsJoin = (...classes: Classname[]) =>
	classes.filter(Boolean).join(' ');
