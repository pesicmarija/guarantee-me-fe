import { Table } from "../../components/Table/Table";

function Warranties() {

  const warranties = [
    {
      id: 1,
      productName: 'TV',
      dateOfPurchase: '2025-09-29',
      warrantyExpirationDate: '2029-09-29',
      photos: [],
      additionalNotes: '',
      category: 'bela tehnika',
      tag: ''
    },
    {
      id: 2,
      productName: 'Usisivač',
      dateOfPurchase: '2025-06-09',
      warrantyExpirationDate: '2028-06-09',
      photos: [],
      additionalNotes: '',
      category: 'bela tehnika',
      tag: 'održavanje kuće'
    },
    {
      id: 3,
      productName: 'Laptop',
      dateOfPurchase: '2024-12-01',
      warrantyExpirationDate: '2027-12-01',
      photos: [],
      additionalNotes: 'Produžena garancija +2 godine',
      category: 'elektronika',
      tag: 'posao'
    },
    {
      id: 4,
      productName: 'Mobilni telefon',
      dateOfPurchase: '2025-03-15',
      warrantyExpirationDate: '2027-03-15',
      photos: [],
      additionalNotes: '',
      category: 'elektronika',
      tag: 'apple'
    },
    {
      id: 5,
      productName: 'Frižider',
      dateOfPurchase: '2023-11-20',
      warrantyExpirationDate: '2028-11-20',
      photos: [],
      additionalNotes: '',
      category: 'bela tehnika',
      tag: ''
    },
    {
      id: 6,
      productName: 'Mikrotalasna',
      dateOfPurchase: '2022-05-10',
      warrantyExpirationDate: '2025-05-10',
      photos: [],
      additionalNotes: '',
      category: 'kuhinjski aparati',
      tag: 'poklon'
    },
    {
      id: 7,
      productName: 'Pegla',
      dateOfPurchase: '2023-12-12',
      warrantyExpirationDate: '2025-12-12',
      photos: [],
      additionalNotes: '',
      category: 'bela tehnika',
      tag: 'održavanje kuće'
    },
    {
      id: 8,
      productName: 'Pametni sat',
      dateOfPurchase: '2024-07-05',
      warrantyExpirationDate: '2026-07-05',
      photos: [],
      additionalNotes: '',
      category: 'elektronika',
      tag: 'gadget'
    },
    {
      id: 9,
      productName: 'Veš mašina',
      dateOfPurchase: '2021-09-18',
      warrantyExpirationDate: '2026-09-18',
      photos: [],
      additionalNotes: '5 godina garancije',
      category: 'bela tehnika',
      tag: ''
    },
    {
      id: 10,
      productName: 'Kafa aparat',
      dateOfPurchase: '2025-02-25',
      warrantyExpirationDate: '2028-02-25',
      photos: [],
      additionalNotes: '',
      category: 'kuhinjski aparati',
      tag: 'jutarnja rutina'
    }
  ];

  function clamp(n, min, max) {
    return Math.min(max, Math.max(min, n));
  }

  function percentRemaining(purchaseISO, expiryISO, now = new Date()) {
    const purchase = new Date(purchaseISO);
    const expiry = new Date(expiryISO);

    const total = expiry.getTime() - purchase.getTime();
    if (total <= 0) return 0; // pogrešni datumi ili isti dan

    const left = expiry.getTime() - now.getTime();
    const pct = (left / total) * 100;
    return Math.round(clamp(pct, 0, 100));
  }

  function daysLeft(expiryISO, now = new Date()) {
    const ms = new Date(expiryISO).getTime() - now.getTime();
    return Math.ceil(ms / (1000 * 60 * 60 * 24)); // za tooltip / badge
  }

  const colDefs = [
    {
      field: 'productName',
      headerName: 'Product Name',
      sortable: true,
      filter: true,
      type: 'string'
    },
    {
      field: 'dateOfPurchase',
      headerName: 'Date of Purchase',
      sortable: true,
      filter: 'agDateColumnFilter',
      type: 'date',
      valueFormatter: params => {
        const date = new Date(params.value);
        return date.toLocaleDateString();
      }
    },
    {
      field: 'warrantyExpirationDate',
      headerName: 'Warranty Expiration Date',
      sortable: true,
      filter: 'agDateColumnFilter',
      type: 'date',
      valueFormatter: params => {
        const date = new Date(params.value);
        return date.toLocaleDateString();
      }
    },
    {
      headerName: 'Warranty Progress',
      cellRenderer: 'progressBarCellRenderer',
      valueGetter: params => ({
        pct: percentRemaining(params.data.dateOfPurchase, params.data.warrantyExpirationDate),
        days: daysLeft(params.data.warrantyExpirationDate),
      }),
    },
    {
      field: 'additionalNotes',
      headerName: 'Additional Notes',
      sortable: false,
      filter: false,
      type: 'string'
    },
    {
      field: 'category',
      headerName: 'Category',
      sortable: true,
      filter: true,
      type: 'string'
    },
    {
      field: 'tag',
      headerName: 'Tag',
      sortable: true,
      filter: true,
      type: 'string',
      cellRenderer: 'tagCellRenderer',
    },
    {
      minWidth: 150,
      cellRenderer: 'actionsCellRenderer',
      cellRendererParams: {
        actions: [
          {
            label: 'Edit',
            icon: 'edit',
            onClick: () => console.log('Edit clicked')
          },
          {
            label: 'Delete',
            icon: 'delete',
            onClick: () => console.log('Delete clicked')
          },
          {
            label: 'View Photos',
            icon: 'image',
            onClick: () => console.log('View Photos clicked')
          }
        ]
      },
    }
  ];

  return (
    <div style={{height: 500}}>
      <Table
        rowData={warranties}
        columnDefs={colDefs}
      />
    </div>
  );
}

export {Warranties};