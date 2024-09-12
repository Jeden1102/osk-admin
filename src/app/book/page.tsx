import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import DefaultLayout from "@/components/Layouts/DefaultLayout";

const BookPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Book" />

      <div className="flex flex-col gap-10">Book page</div>
    </DefaultLayout>
  );
};

export default BookPage;
