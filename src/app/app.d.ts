type SegmentParams<T extends object = unknown> = T extends Record<string, string>
  ? { [K in keyof T]: T[K] extends string ? string | string[] | undefined : never }
  : T


  export interface PageProps {
    params: Promise<SegmentParams>;
    searchParams?: Promise<object>;
  }
