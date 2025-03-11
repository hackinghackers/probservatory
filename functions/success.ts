/**
 * POST /api/submit
 */
export const onRequestPost: PagesFunction = async (context) => {
  try {
    const input = await context.request.formData();
    const pretty = JSON.stringify([...input], null, 2);
    return new Response(pretty, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
  } catch (err) {
    return new Response(err, { status: 400 });
  }
};

async function createFirebaseRecord(env, body) {
  
