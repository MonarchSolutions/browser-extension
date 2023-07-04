import { MyStateCreator } from './store';

export type SettingsSlice = {
  openAIKey: string | null;
  openAIBase: string | undefined;
  selectedModel: string;
  actions: {
    update: (values: Partial<SettingsSlice>) => void;
  };
};
export const createSettingsSlice: MyStateCreator<SettingsSlice> = (set) => ({
  openAIKey: null,
  openAIBase: undefined,
  selectedModel: 'gpt-3.5-turbo',
  actions: {
    update: (values) => {
      set((state) => {
        state.settings = { ...state.settings, ...values };
      });
    },
  },
});
