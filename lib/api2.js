const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

// export async function getPreviewPost(id, idType = "DATABASE_ID") {
//   const data = await fetchAPI(
//     `
//     query PreviewPost($id: ID!, $idType: PostIdType!) {
//       post(id: $id, idType: $idType) {
//         databaseId
//         slug
//         status
//       }
//     }`,
//     {
//       variables: { id, idType },
//     }
//   );
//   return data.post;
// }

// export async function getAllPostsWithSlug() {
//   const data = await fetchAPI(`
//     {
//       posts(first: 10000) {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `);
//   return data?.posts;
// }

// export async function getAllPostsForHome(preview) {
//   const data = await fetchAPI(
//     `
//     query AllPosts {
//       posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
//         edges {
//           node {
//             title
//             excerpt
//             slug
//             date
//             featuredImage {
//               node {
//                 sourceUrl
//               }
//             }
//             author {
//               node {
//                 name
//                 firstName
//                 lastName
//                 avatar {
//                   url
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `,
//     {
//       variables: {
//         onlyEnabled: !preview,
//         preview,
//       },
//     }
//   );

//   return data?.posts;
// }
// query NewQuery {

// }
// export async function getAllOglasiNaslovi(preview) {
//   const data = await fetchAPI(
//     `
//       query allOglasi {
//         oglasi {
//           edges {
//             node {
//               oglasi {
//                 naslovOglasa
//                 naslovOglasaEng
//               }
//               id
//             }
//           }
//         }
//       }
//     `,
//     {
//       variables: {
//         onlyEnabled: !preview,
//         preview,
//       },
//     }
//   );

//   return data?.oglasi;
// }
export async function getAllRecepti(preview) {
  const data = await fetchAPI(
    `
      query allRecepti{
        perlaRecepti(first: 50) {
          edges {
            node {
              perlaRecepti {
                naslovRecepta
                naslovReceptaEng
                trajanjeKuhanja
                trajanjePripreme
                dodatniPrilog {
                  nazivDodatnogPriloga
                  sastojciZaDodatniPrilog {
                    jedinicnaMjera
                    kolicina
                    nazivNamirnice
                  }
                  fieldGroupName
                }
                fieldGroupName
                fotografijaRecepta {
                  sourceUrl
                  srcSet
                }
                postupakPoKoracima {
                  korak
                }
                sastojcizaglavnojelo {
                  kolicina
                  nazivNamirnice
                  jedinicnaMjera
                }
                fotografijaReceptaDonja {
                  sourceUrl
                }
                postupakPoKoracimaPrilog {
                  korak
                }
                dodatniPrilogEng {
                  nazivDodatnogPrilogaEng
                  sastojciZaDodatniPrilogEng {
                    jedinicnaMjeraEng
                    kolicinaEng
                    nazivNamirniceEng
                  }
                }
                naslovReceptaEng
                postupakPoKoracimaEng {
                  korakEng
                }
                postupakPoKoracimaPrilogEng {
                  korakEng
                }
                sastojcizaglavnojeloEng {
                  jedinicnaMjeraEng
                  kolicinaEng
                  nazivNamirniceEng
                }
                perlaSastojci {
                  kolicina
                  perlaProizvodUReceptu
                  jedinicnaMjera
                }
                perlaSastojciEng {
                  jedinicnaMjera
                  kolicina
                  perlaProizvodUReceptu
                }
                youtubeLinkVidea
                tag {
                  name
                }
                tagEng {
                  name
                }
              }
              date
              id
              slug
            }
          }
        }
      }
    `
  );

  return data?.perlaRecepti;
}

export async function getAllReceptiPaths(preview) {
  const data = await fetchAPI(
    `
      query allRecepti{
        perlaRecepti(first: 50) {
          edges {
            node {
              perlaRecepti {
                naslovRecepta
                naslovReceptaEng             
              }
              date
              id
              slug
            }
          }
        }
      }
    `
  );

  return data?.perlaRecepti;
}

export async function getAllPerlaProizvodi(preview) {
  try {
    const data = await fetchAPI(
      `
        query allProizvodi {
          proizvodi(first: 300) {
            edges {
           node {
        proizvodiInformacije {
          imeProizvodaDo60Znakova
          imeProizvodaDo60ZnakovaEng
          kataloskiBroj
          kategorijaKojojProizvodPripada
          certifikatMsc
          certifikatZivjetiZdravo
          ifsFood
          jedinicaMjere
          latinskiNazivDo60Znakova
          marketinskoImePerlaProizvodaEng
          marketinskoImePerlaProizvodaHr
          nacinSmrzavanja
          opisEngDo300Znakova
          opisHrDo300Znakova
          slikaProizvoda {
            sourceUrl
          }
        }
        title
        proizvodId
      }
            }
          }
        }
      `
    );

    return (
      data?.proizvodi?.edges?.filter(
        ({ node }) =>
          node?.proizvodiInformacije?.kategorijaKojojProizvodPripada === "PERLA"
      ) ?? []
    );
  } catch (error) {
    console.error("getAllPerlaProizvodi failed:", error);
    return [];
  }
}
export async function getAllPerlaProizvodiPaths() {
  // Removed 'preview' parameter
  try {
    const data = await fetchAPI(
      `
        query allProizvodi {
          proizvodi(first: 240) {
            edges {
              node {
                proizvodiInformacije {
                  imeProizvodaDo60Znakova
                  imeProizvodaDo60ZnakovaEng
                  kataloskiBroj
                  kategorijaKojojProizvodPripada
                }
              }
            }
          }
        }
      `
    );

    return (
      data?.proizvodi?.edges?.filter(
        ({ node }) =>
          node?.proizvodiInformacije?.kategorijaKojojProizvodPripada === "PERLA"
      ) ?? []
    );
  } catch (error) {
    console.error("getAllPerlaProizvodiPaths failed:", error); // Updated function name in log
    return [];
  }
}
//-------------

// export async function getSingleRecept(id) {
//   const data = await fetchAPI(
//     `
//     query SingleRecept($id: ID!) {
//       # Query for a single recipe node by its ID
//       recept(id: $id, idType: DATABASE_ID) { # Assuming 'id' is the databaseId or you can query by global ID: recept(id: $id) {
//         # Include all fields that you need for your recipe detail page
//         date
//         id # Ensure ID is returned for consistency
//         slug
//         title
//         perlaRecepti {
//           naslovRecepta
//           naslovReceptaEng
//           trajanjeKuhanja
//           trajanjePripreme
//           dodatniPrilog {
//             nazivDodatnogPriloga
//             sastojciZaDodatniPrilog {
//               jedinicnaMjera
//               kolicina
//               nazivNamirnice
//             }
//             fieldGroupName
//           }
//           fieldGroupName
//           fotografijaRecepta {
//             sourceUrl
//             srcSet
//           }
//           postupakPoKoracima {
//             korak
//           }
//           sastojcizaglavnojelo {
//             kolicina
//             nazivNamirnice
//             jedinicnaMjera
//           }
//           fotografijaReceptaDonja {
//             sourceUrl
//           }
//           postupakPoKoracimaPrilog {
//             korak
//           }
//           dodatniPrilogEng {
//             nazivDodatnogPrilogaEng
//             sastojciZaDodatniPrilogEng {
//               jedinicnaMjeraEng
//               kolicinaEng
//               nazivNamirniceEng
//             }
//           }
//           naslovReceptaEng
//           postupakPoKoracimaEng {
//             korakEng
//           }
//           postupakPoKoracimaPrilogEng {
//             korakEng
//           }
//           sastojcizaglavnojeloEng {
//             jedinicnaMjeraEng
//             kolicinaEng
//             nazivNamirniceEng
//           }
//           perlaSastojci {
//             kolicina
//             perlaProizvodUReceptu
//             jedinicnaMjera
//           }
//           perlaSastojciEng {
//             jedinicnaMjera
//             kolicina
//             perlaProizvodUReceptu
//           }
//           youtubeLinkVidea
//           tag {
//             name
//           }
//           tagEng {
//             name
//           }
//         }
//       }
//     }
//     `,
//     {
//       variables: {
//         id: id,
//       },
//     }
//   );

//   // WPGraphQL for single nodes directly returns the node under the type name (e.g., 'recept')
//   return data?.recept;
// }

export async function getAllProizvodi2(preview) {
  const data = await fetchAPI(
    `
      query allProizvodi {
  proizvodi(first:300) {
    edges {
      node {
        title
        slug
        proizvodiInformacije {
          aktivatorProizvoda
          brojKutijaNaPaleti
          certifikatMsc
          certifikatZivjetiZdravo
          featuredPerlaProduct
          fieldGroupName
          ifsFood
          imeProizvodaDo60Znakova
          imeProizvodaDo60ZnakovaEng
          jedinicaMjere
          kataloskiBroj
          kategorijaKojojProizvodPripada
          latinskiNazivDo60Znakova
          marketinskoImePerlaProizvodaEng
          marketinskoImePerlaProizvodaHr
          nacinSmrzavanja
          opisEngDo300Znakova
          opisHrDo300Znakova
          ostaleJediniceVelicinaPecaturaBrojKomUKg
          oznakaNovo
          oznakaNovoPakiranje
          vrijednostOstaleVelicine
          tezinaPoJediniciMjere
          perlaHoreca
          slikaProizvoda {
            sourceUrl
          }
        }
        proizvodId
      }
    }
  }
}
    `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.proizvodi;
}
