import axios from "axios";

const httpService = axios.create({
  timeout: 30000,
});

export const parseIgonan = async (t: string): Promise<string> => {
  try {
    const result = await httpService({
      method: "get",
      url: `https://www.toptal.com/developers/gitignore/api/${t}`,
    });
    return result.data.toString() ?? "";
  } catch (e) {
    return "";
  }
};
