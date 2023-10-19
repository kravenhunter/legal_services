type Props = {
  params: {
    section: string;
  };
};

export default async function Section({ params: { section } }: Props) {
  return <h3>{section}</h3>;
}
