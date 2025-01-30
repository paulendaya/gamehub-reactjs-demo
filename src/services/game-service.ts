import apiClient from "./api-client";

export interface Genre  {
  id: number;
  image_background: string;
  name: string;
  slug: string;
}

export interface GenreResults {
  results: Genre[];
}

export interface Game {
  id: number;
  background_image: string;
  slug: string;
  name: string;
  metacritic: number;
  parent_platforms: {platform: Platform}[],
  genres: [], 
  rating: number;
}

export interface GameResults {
  results: Game[];
}

export interface GamePlatform {
  platform: Platform;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface PlatformResults {
  results: Platform[];
}

export interface PlatformParent {
  platform: Platform;
}

class GameService {

  pageSize = 40;
  platforms = [];
  genres = [];
  orderBy = 'name';
  search = '';

  constructor (pageSize: number, platforms: [], genres: [], orderBy: string, search: string) {
    this.pageSize = pageSize;
    this.platforms = platforms || null;
    this.genres = genres || null;
    this.orderBy = orderBy || 'name';
    this.search = search || '';
  }

  getController() {
    const controller = new AbortController();
    return controller;
  }
  
  getGenres() {
    const controller = this.getController();
        const request = apiClient.get<GenreResults>('/genres', {
                signal: controller.signal,
        });

        return { request, cancel: () => controller.abort() }
  }

  getGames() {

    const controller = this.getController();
    const gamesRequest = apiClient.get<GameResults>('/games', {
        signal: controller.signal,
        params: {
          page_size: this.pageSize,
        }
    });
    
    return {gamesRequest, cancelGames: () => controller.abort()}
  }

  getPlatforms() {

    const controller = this.getController();
    const platformsRequest = apiClient.get<PlatformResults>('/platforms/lists/parents', {
        signal: controller.signal,
    });
    
    return {platformsRequest, cancelPlatforms: () => controller.abort()}
  }

}

export default new GameService(100, [], [], 'name', '');