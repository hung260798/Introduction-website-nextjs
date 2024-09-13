import useSWR from "swr";

export function usePosts() {
  const { data, error, isLoading } = useSWR("/api/bai-viets", (...args) =>
    fetch(...args).then((response) => response.json())
  );
  return { data, error, isLoading };
}

export function usePost(postId) {
  const { data, error, isLoading } = useSWR(
    "/api/bai-viets/" + postId,
    (...args) => fetch(...args).then((response) => response.json())
  );
  return { data, error, isLoading };
}
