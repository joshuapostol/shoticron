document.getElementById('load-video').addEventListener('click', getRandomVideo);

async function getRandomVideo() {
  try {
      const url = 'https://your-shoti-api.vercel.app/api/v1/get';
          const rawResponse = await fetch(url, {
                method: 'POST',
                      headers: {
                              'Content-Type': 'application/json'
                                    },
                                          body: JSON.stringify({ apikey: "$shoti-1hg4gifgnlfdmeslom8" })
                                              });
                                                  const content = await rawResponse.json();
                                                      document.getElementById('video').src = content.data.url;
                                                        } catch (e) {
                                                            console.error("Error fetching Shoti video", e);
                                                              }
                                                              }