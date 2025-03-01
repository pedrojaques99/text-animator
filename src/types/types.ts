export interface TextConfig {
  text: string;
  fontFamily: string;
  fontSize: number;
  textColor: string;
  backgroundColor: string;
  textAlign: 'left' | 'center' | 'right';
  fontWeight: string;
  fontStyle: string;
  letterSpacing: number;
  lineHeight: number;
  opacity: number;
}

export interface AnimationConfig {
  type: string;
  speed: number;
  intensity: number;
}

export interface RepeatConfig {
  x: number;
  y: number;
  spacing: {
    x: number;
    y: number;
  };
}

export interface ShadowConfig {
  enabled: boolean;
  color: string;
  blur: number;
  offsetX: number;
  offsetY: number;
}

export interface OutlineConfig {
  enabled: boolean;
  color: string;
  width: number;
}

export interface CanvasConfig {
  width: number;
  height: number;
} 