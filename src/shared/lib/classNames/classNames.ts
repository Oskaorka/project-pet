type Mods = Record<string, boolean | string>;

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = [],
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
// ...Object.keys(mods).filter(key => mods[key]).join(" ");

// classNames("remove-btn", { hovered: false, seletable: true, red: false }, [
//   "pdg",
// ]);
