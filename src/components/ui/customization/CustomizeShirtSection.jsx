import React from "react"

export const CustomizeShirtSection = ({ handleSelectCustomization, customization }) => {

  const shirtTypesButtons = [
    {
      key: 'shirt',
      title: 'T-Shirt',
      image: '/shirt/black-shirt.png'
    },
    {
      key: 'long',
      title: 'Longsleeves',
      image: '/shirt/black-long.png'

    }
  ];

  const designSizeButtons = [
    {
      value: 'h-20',
      size: '25x30',
      title: 'Small'
    },
    {
      value: 'h-32',
      size: '30x35',
      title: 'Medium'
    },
    {
      value: 'h-40',
      size: '35x40',
      title: 'Large'
    }
  ];

  const shirtColorButtons = [
    {
      key: 'white',
      color: 'bg-white',
      title: 'White'
    },
    {
      key: 'grey',
      color: 'bg-shirt-grey',
      title: 'Grey'
    },
    {
      key: 'black',
      color: 'bg-shirt-black',
      title: 'Black'
    },
    {
      key: 'maroon',
      color: 'bg-shirt-maroon',
      title: 'Maroon'
    },
    {
      key: 'indigo',
      color: 'bg-shirt-indigo',
      title: 'Dark Grey'
    },
    {
      key: 'mustard',
      color: 'bg-shirt-mustard',
      title: 'Mustard'
    },
  ];

  return (
    <div>
      <h1 className="oleo-font text-2xl">Shirt Type</h1>
      <p>You can select shirt type!</p>
      <div className="flex items-center justify-center space-x-7 mt-5">
        {
          shirtTypesButtons?.map((shirtType, index) => {
            return (
              <div
                key={`shirt-type-key-${index}`}
                className="flex flex-col items-center justify-center space-y-2 cursor-pointer"
                onClick={() => handleSelectCustomization('type', shirtType?.key)}
              >
                <div className={`border-2 border-highlight-yellow p-5 rounded-full ${customization?.type == shirtType.key && 'bg-highlight-yellow'} duration-500`}>
                  <img src={shirtType?.image} className="h-10" />
                </div>
                <h1 className="font-bold">{shirtType?.title}</h1>
              </div>
            )
          })
        }
      </div>
      <h1 className="oleo-font text-2xl mt-7">Design Size</h1>
      <p>Choose you desired size! In cm.</p>
      <div className="grid grid-cols-12 mt-5 gap-5">
        {
          designSizeButtons?.map((designSize, index) => {
            return (
              <div
                key={`design-size-key-${index}`}
                className="col-span-4"
                onClick={() => handleSelectCustomization('shirtSize', designSize?.value)}
              >
                <div className="flex flex-col items-center justify-center space-y-2 cursor-pointer">
                  <div className={`flex items-center justify-center border-2 border-highlight-yellow p-5 rounded-full w-20 h-20 ${customization?.shirtSize == designSize.value && 'bg-highlight-yellow text-accent-rose duration-500'}`}>
                    <p className="font-bold">{designSize?.size}</p>
                  </div>
                  <h1 className="font-bold">{designSize?.title}</h1>
                </div>
              </div>
            )
          })
        }
      </div>
      <h1 className="oleo-font text-2xl mt-7">Shirt Color</h1>
      <p>You can customize colors!</p>
      <div className="grid grid-cols-12 mt-5 gap-5">
        {
          shirtColorButtons?.map((shirtColor, index) => {
            return (
              <div
                key={`shirt-color-key-${index}`}
                className="col-span-3"
                onClick={() => handleSelectCustomization('shirtColor', shirtColor?.key)}
              >
                <div className="flex flex-col items-center justify-center space-y-2 cursor-pointer">
                  <div className={`${shirtColor?.color} p-5 rounded-full ${shirtColor?.key == customization?.shirtColor && 'border-2 border-highlight-yellow'} `} />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}