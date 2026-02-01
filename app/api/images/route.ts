import { NextResponse } from 'next/server';

// =============================================================================
// GET - Fetch all images (placeholder)
// =============================================================================

export async function GET() {
  // This is a placeholder API route
  // In production, this would fetch from a database
  
  const images = [
    {
      id: '1',
      title: 'Fresh Garden Salad',
      category: 'fresh-produce',
      thumbnailUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400',
    },
    {
      id: '2',
      title: 'Artisan Coffee',
      category: 'beverages',
      thumbnailUrl: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=400',
    },
    {
      id: '3',
      title: 'Chocolate Cake',
      category: 'desserts-sweets',
      thumbnailUrl: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400',
    },
  ];

  return NextResponse.json({
    success: true,
    data: images,
    total: images.length,
  });
}

// =============================================================================
// POST - Create new image (placeholder)
// =============================================================================

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.title || !body.category) {
      return NextResponse.json(
        { success: false, error: 'Title and category are required' },
        { status: 400 }
      );
    }

    // In production, this would save to a database
    const newImage = {
      id: Date.now().toString(),
      title: body.title,
      category: body.category,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      data: newImage,
    }, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request body' },
      { status: 400 }
    );
  }
}