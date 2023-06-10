export type SearchProps = {
    findUser: (userName: string) => Promise<void>; // Essa função retorna uma promise que não retorna nada
}