type SegmentParams<T extends object = { [key: string]: string }> = {
    [K in keyof T]: T[K] extends string ? string | string[] | undefined : never;
  };
  
  export interface PageProps<T extends { [key: string]: string } = { [key: string]: string }> {
    params: Promise<SegmentParams<T>> & SegmentParams<T>;
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }> & { [key: string]: string | string[] | undefined };
  }