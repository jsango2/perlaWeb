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
    `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.perlaRecepti;
}

export async function getAllProizvodi(preview) {
  const data = await fetchAPI(
    `
      query allProizvodi {
 proizvodi(first: 1000) {
    edges {
      node {
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
          perlaHoreca
          vrijednostOstaleVelicine
          tezinaPoJediniciMjere
          slikaProizvoda {
            sourceUrl
            uri
            mediaItemUrl
          }
        }
        title
        slug
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

  return data?.proizvodi ?? [];
}

export async function getAllPerlaProizvodi(preview) {
  const data = await fetchAPI(
    `
      query allProizvodi {
 proizvodi(first: 1000) {
    edges {
      node {
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
          perlaHoreca
          vrijednostOstaleVelicine
          tezinaPoJediniciMjere
          slikaProizvoda {
            sourceUrl
            uri
            mediaItemUrl
          }
        }
        title
        slug
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

  return (
    data?.proizvodi?.edges?.filter(
      ({ node }) =>
        node.proizvodiInformacije?.kategorijaKojojProizvodPripada === "PERLA"
    ) ?? []
  );
}

// export async function getAllNovosti(preview) {
//   const data = await fetchAPI(
//     `
//       query allNovosti {
//         novosti {
//           edges {
//             node {
//              id
//               novosti {
//                 naslov
//                 naslovEng
//                 textNovosti
//                 seoDescription
//                 seoOpis
//                 textNovostiEng
//                 istaknutaNovost
//                 datum
//                 istaknutaFotografija {
//                   sourceUrl
//                   srcSet
//                 }
//               }
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

//   return data?.novosti;
// }

// export async function getAllPhotosProizvodi(preview) {
//   const data = await fetchAPI(
//     `
//       query allNovosti {
//        mediaItems(first: 200) {
//           edges {
//             node {
//               sourceUrl
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

//   return data?.mediaItems;
// }

// export async function getAllReceptiNaslovi(preview) {
//   const data = await fetchAPI(
//     `
//       query allReceptiNaslovi {
//         perlaRecepti {
//           edges {
//             node {
//               perlaRecepti {
//                 naslovRecepta
//                 naslovReceptaEng
//               }
//               date
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

//   return data?.perlaRecepti;
// }

// export async function getPostAndMorePosts(slug, preview, previewData) {
//   const postPreview = preview && previewData?.post;
//   // The slug may be the id of an unpublished post
//   const isId = Number.isInteger(Number(slug));
//   const isSamePost = isId
//     ? Number(slug) === postPreview.id
//     : slug === postPreview.slug;
//   const isDraft = isSamePost && postPreview?.status === "draft";
//   const isRevision = isSamePost && postPreview?.status === "publish";
//   const data = await fetchAPI(
//     `
//     fragment AuthorFields on User {
//       name
//       firstName
//       lastName
//       avatar {
//         url
//       }
//     }
//     fragment PostFields on Post {
//       title
//       excerpt
//       slug
//       date
//       featuredImage {
//         node {
//           sourceUrl
//         }
//       }
//       author {
//         node {
//           ...AuthorFields
//         }
//       }
//       categories {
//         edges {
//           node {
//             name
//           }
//         }
//       }
//       tags {
//         edges {
//           node {
//             name
//           }
//         }
//       }
//     }
//     query PostBySlug($id: ID!, $idType: PostIdType!) {
//       post(id: $id, idType: $idType) {
//         ...PostFields
//         content
//         ${
//           // Only some of the fields of a revision are considered as there are some inconsistencies
//           isRevision
//             ? `
//         revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
//           edges {
//             node {
//               title
//               excerpt
//               content
//               author {
//                 node {
//                   ...AuthorFields
//                 }
//               }
//             }
//           }
//         }
//         `
//             : ""
//         }
//       }
//       posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
//         edges {
//           node {
//             ...PostFields
//           }
//         }
//       }
//     }
//   `,
//     {
//       variables: {
//         id: isDraft ? postPreview.id : slug,
//         idType: isDraft ? "DATABASE_ID" : "SLUG",
//       },
//     }
//   );

//   // Draft posts may not have an slug
//   if (isDraft) data.post.slug = postPreview.id;
//   // Apply a revision (changes in a published post)
//   if (isRevision && data.post.revisions) {
//     const revision = data.post.revisions.edges[0]?.node;

//     if (revision) Object.assign(data.post, revision);
//     delete data.post.revisions;
//   }

//   // Filter out the main post
//   data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug);
//   // If there are still 3 posts, remove the last one
//   if (data.posts.edges.length > 2) data.posts.edges.pop();

//   return data;
// }
