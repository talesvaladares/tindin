export type Game = {
  id: string;
  title: string;
  rating: number;
  mediumPrice: number;
  photos: {
    url: string;
    id: string;
    name: string;
  }[];
  platforms: 'PS3' | 'PS4' | 'PS4'

}

export type GameResponse = {
  games: Game[];
  totalSize: number;
}
