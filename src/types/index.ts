export interface Member {
  id: number;
  name: string;
  generation: string;
  price: number;
  image: string;
  phone: string;
}

export interface TopIdol {
  user_id: string;
  idol_id: string;
  nickname: string;
  profile_image: string;
  subscription_count: number;
}

export interface TopIdolResponse {
  success: boolean;
  code: number;
  message: string;
  data: TopIdol[];
}