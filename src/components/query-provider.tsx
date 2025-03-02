// React Query is no longer needed as we fetch data from the server.
// "use client";

// import { useState } from "react";
// import { toast } from "sonner";
// import {
// 	QueryCache,
// 	QueryClient,
// 	QueryClientProvider
// } from "@tanstack/react-query";

// interface Props {
// 	children: React.ReactNode;
// }

// export default function QueryProvider({ children }: Props) {
// 	const [queryClient] = useState(
// 		() =>
// 			new QueryClient({
// 				queryCache: new QueryCache({
// 					onError: (error, query) => {
// 						if (query?.meta?.errorMessage) {
// 							toast.error(query.meta.errorMessage as string, {
// 								description: "Please, try reloading the page.",
// 								action: {
// 									label: "Reload",
// 									onClick: () => window.location.reload()
// 								}
// 							});
// 						}
// 					}
// 				})
// 			})
// 	);

// 	return (
// 		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
// 	);
// }
