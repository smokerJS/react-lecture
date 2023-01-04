// declare module "*.css" {
//   const content: { [className: string]: string };
//   export = content;
// }

declare module "*.css" {
  const value: any;
  export = value;
}
